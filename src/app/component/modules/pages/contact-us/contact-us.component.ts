import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeUrlPipe } from '../../../../shared/shared/pipes/safe-url.pipe';
import { ContactService } from '../../../../core/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SafeUrlPipe],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  private contactService = inject(ContactService);
  loader: boolean = false;
  contact = {
    address: '123 Corporate Blvd, City, Country',
    phone: '+1 (555) 123-4567',
    email: 'contact@company.com',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.41941548468209!3d37.77492927975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808!2sYour%20Office!5e0!3m2!1sen!2sus!4v1610000000000', // Replace with your actual embed URL
    socialLinks: {
      github: 'https://github.com/mayurramdham/',
      linkedin: 'https://in.linkedin.com/in/mayurramdham02',
      twitter: 'https://x.com/mayurramdham02?t=ZaflJXTR_ODjBlqzZpnFng&s=08',
      instagram: 'https://in.linkedin.com/in/mayurramdham02',
    },
  };

  onSubmit(form: any) {
    this.loader = true;

    this.contactService.addContact(form.value).subscribe({
      next: (response) => {
        if (response.statusCode == 200) {
          console.log(response);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: 'success',
            title: 'Mail Send Successfully, We Will Contact Shortly',
          });
          this.loader = false;
        } else {
          this.loader = false;
          console.log(response);
          alert('unknown error');
        }
      },
      error: (error) => {
        this.loader = false;
        console.log('Email errors:', form.controls.email.errors);
        console.log(error);
      },
    });
    console.log('Form submitted:', form.value);
  }
}
