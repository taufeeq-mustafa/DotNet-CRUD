import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormComponent } from './student-form.component';

describe('StudentFormComponent', () => {
  let component: StudentFormComponent;
  let fixture: ComponentFixture<StudentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { ComponentFixture, TestBed } from '@angular/core/testing'; // Import TestBed and ComponentFixture
// import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // If you're using forms in the component
// import { StudentFormComponent } from './student-form.component'; // Ensure this path is correct

// describe('StudentFormComponent', () => {
//   let component: StudentFormComponent;
//   let fixture: ComponentFixture<StudentFormComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [StudentFormComponent], // Declare the component here
//       imports: [FormsModule, ReactiveFormsModule], // Import necessary modules (if using forms)
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(StudentFormComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy(); // Ensure the component is created
//   });
// });
