import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@Input() header: string | null = 'My Custom Card Header';
	@Input() body: string | null = 'My Custom Card Body';
	@Input() footerContent: string | null = 'My Custom Card Footer';

	@Output() cardEvent = new EventEmitter();

	title = 'my-custom-card';

	handleClick(): void{
		this.cardEvent.emit('Hello from Custom Element!');
	}
}
