export class TOCManager {
  private isOpen = false;
  private tocButton: HTMLElement | null;
  private tocPanel: HTMLElement | null;
  private closeButton: HTMLElement | null;

  constructor() {
    this.tocButton = document.getElementById('tocButton');
    this.tocPanel = document.getElementById('tocPanel');
    this.closeButton = document.getElementById('closeButton');
    this.init();
  }

  private init() {
    this.setupEventListeners();
    this.setupHeadingLinks();
  }

  private setupEventListeners() {
    this.tocButton?.addEventListener('click', () => this.toggle());
    this.closeButton?.addEventListener('click', () => this.close());
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (this.isOpen && !this.tocPanel?.contains(target) && !this.tocButton?.contains(target)) {
        this.close();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  private setupHeadingLinks() {
    const links = this.tocPanel?.querySelectorAll('a');
    links?.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          this.close();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  private toggle() {
    this.isOpen ? this.close() : this.open();
  }

  private open() {
    this.isOpen = true;
    this.tocPanel?.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
    this.tocPanel?.classList.add('touch-pan-y');
  }

  private close() {
    this.isOpen = false;
    this.tocPanel?.classList.add('translate-x-full');
    document.body.style.overflow = '';
    this.tocPanel?.classList.remove('touch-pan-y');
  }
}