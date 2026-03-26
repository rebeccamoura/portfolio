import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
	public contactForm: FormGroup;
  	constructor(private _formBuilder: FormBuilder) {
		this.contactForm = this._formBuilder.group({
			name: ["", Validators.required],
			email: ["", Validators.required],
			content: ["", Validators.required]
		})
	}

	public sendEmail(): void {
		const recipient = "rebeccamouradev@gmail.com";
		const emailTitle = `Contato do Portfólio - ${this.contactForm.get("email")?.value}`;
		const emailContent = `Nome: ${this.contactForm.get("name")?.value}.\nConteúdo: ${this.contactForm.get("content")?.value}`
		window.location.href = `mailto:${recipient}?subject=${emailTitle}&body=${emailContent}`;
	}
}
