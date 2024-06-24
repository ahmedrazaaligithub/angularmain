import { Component } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrl: './marksheet.component.css'
})
export class MarksheetComponent {
  submitForm() {
    // Retrieve values directly from DOM elements
    const assignment1Marks = +(document.getElementById('assignment1') as HTMLInputElement).value;
    const assignment2Marks = +(document.getElementById('assignment2') as HTMLInputElement).value;
    const assignment3Marks = +(document.getElementById('assignment3') as HTMLInputElement).value;
    const midtermMarks = +(document.getElementById('midMarks') as HTMLInputElement).value;
    const finalMarks = +(document.getElementById('finalMarks') as HTMLInputElement).value;
    const projectMarks = +(document.getElementById('projectMarks') as HTMLInputElement).value;
    const progress = (document.getElementById('progress') as HTMLElement)

    // Log values to console (you can process them further as needed)
    console.log('Assignment 1 Marks:', assignment1Marks);
    console.log('Assignment 2 Marks:', assignment2Marks);
    console.log('Midterm Marks:', midtermMarks);
    console.log('Final Exam Marks:', finalMarks);
    console.log('Project Marks:', projectMarks);

 progress.innerHTML+=(assignment1Marks*0.05)+(assignment2Marks*0.05)+(assignment3Marks*0.05)+(midtermMarks*0.15)+(finalMarks*0.05)+(projectMarks*0.05)

    // Example of further processing (e.g., sending to server)
    // This part can be customized based on your application's requirements
    const formData = {
      assignment1: assignment1Marks,
      assignment2: assignment2Marks,
      assignment3: assignment3Marks,
      midterm: midtermMarks,
      final: finalMarks,
      project: projectMarks
    };

    // Example of sending data to a service or performing further actions
    // For demonstration, just log here
    console.log('Submitting form data:', formData);
  }
}
