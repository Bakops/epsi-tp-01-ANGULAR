import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TextFormatPipe } from '../../pipe/text-format.pipe';

@Component({
  selector: 'app-header',
  imports: [TextFormatPipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'biblioTech.';
}
