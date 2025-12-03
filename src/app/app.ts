import { Component } from '@angular/core';
import { HeroComponent, TechStackComponent, FeaturesComponent, PricingComponent, CtaComponent } from './sections';

@Component({
  imports: [HeroComponent, TechStackComponent, FeaturesComponent, PricingComponent, CtaComponent],
  selector: 'ax-root',
  template: `
    <main class="landing">
      <ax-hero />
      <ax-tech-stack />
      <ax-features />
      <ax-pricing />
      <ax-cta />
    </main>
  `,
  styles: [`
    .landing {
      min-height: 100vh;
      background: #0a0a1a;
    }
  `]
})
export class App {}
