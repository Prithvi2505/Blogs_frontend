import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllBlogs } from './all-blogs';

describe('AllBlogs', () => {
  let component: AllBlogs;
  let fixture: ComponentFixture<AllBlogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllBlogs],
    }).compileComponents();

    fixture = TestBed.createComponent(AllBlogs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
