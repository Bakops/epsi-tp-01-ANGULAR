import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextFormatPipe } from '../../../pipe/text-format.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TextFormatPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  isMenuOpen = false;
  title = 'BiblioTech';
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateBodyClass();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.updateBodyClass();
  }

  private updateBodyClass(): void {
    if (this.isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;

    if (
      this.isMenuOpen &&
      !target.closest('.menu-icon') &&
      !target.closest('.nav-links') &&
      !target.closest('.right-section')
    ) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const target = event.target as Window;

    if (target.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapePress(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  ngOnDestroy(): void {
    document.body.classList.remove('menu-open');
    window.removeEventListener('scroll', this.onScroll, true);
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll, true);
  }

  onScroll = () => {
    const header = document.querySelector('.header2');
    if (window.scrollY > 0) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
}
