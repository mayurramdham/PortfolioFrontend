import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeUrlPipe } from '../../../../shared/shared/pipes/safe-url.pipe';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SafeUrlPipe],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  contact = {
    address: '123 Corporate Blvd, City, Country',
    phone: '+1 (555) 123-4567',
    email: 'contact@company.com',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.41941548468209!3d37.77492927975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808!2sYour%20Office!5e0!3m2!1sen!2sus!4v1610000000000', // Replace with your actual embed URL
    socialLinks: {
      github: 'https://github.com/your-github',
      linkedin: 'https://linkedin.com/in/your-linkedin',
      twitter: 'https://twitter.com/your-twitter',
      instagram: 'https://instagram.com/your-instagram',
    },
  };

  onSubmit(form: any) {
    // Handle form submission (e.g., call your API)
    console.log('Form submitted:', form.value);
  }
}
