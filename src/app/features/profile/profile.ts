import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Auth } from '../../core/auth/auth';

@Component({
	imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule],
	selector: 'app-profile',
	templateUrl: './profile.html',
})
export class Profile implements OnInit {
	private readonly formBuilder = inject(FormBuilder);
	private readonly auth = inject(Auth);

	readonly user = this.auth.user;
	readonly form = this.formBuilder.nonNullable.group({
		name: ['', [Validators.required, Validators.maxLength(100)]],
		bio: ['', Validators.maxLength(500)],
	});
	isLoading = true;
	isEditing = false;
	isSaving = false;
	errorMessage = '';
	successMessage = '';

	ngOnInit(): void {
		const cachedUser = this.user();
		if (cachedUser) this.form.patchValue({ name: cachedUser.name, bio: cachedUser.bio ?? '' });

		this.auth.getProfile().subscribe({
			next: user => {
				this.form.patchValue({ name: user.name, bio: user.bio ?? '' });
				this.isLoading = false;
			},
			error: error => {
				this.errorMessage = error.error?.detail ?? 'Unable to load your profile.';
				this.isLoading = false;
			},
		});
	}

	get initials(): string {
		return this.user()?.name.trim().charAt(0).toUpperCase() || '?';
	}

	edit(): void {
		this.errorMessage = '';
		this.successMessage = '';
		this.isEditing = true;
	}

	cancel(): void {
		const user = this.user();
		if (user) this.form.reset({ name: user.name, bio: user.bio ?? '' });
		this.isEditing = false;
		this.errorMessage = '';
	}

	save(): void {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		this.isSaving = true;
		this.errorMessage = '';
		this.successMessage = '';
		const { name, bio } = this.form.getRawValue();
		this.auth.updateProfile({ name: name.trim(), bio: bio.trim() || null }).subscribe({
			next: user => {
				this.form.patchValue({ name: user.name, bio: user.bio ?? '' });
				this.isSaving = false;
				this.isEditing = false;
				this.successMessage = 'Profile updated.';
			},
			error: error => {
				this.errorMessage = error.error?.detail ?? 'Unable to update your profile.';
				this.isSaving = false;
			},
		});
	}
}