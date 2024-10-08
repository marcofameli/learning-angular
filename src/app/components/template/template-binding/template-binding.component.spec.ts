import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateBindingComponent } from './template-binding.component';

describe('TemplateBindingComponent', () => {
  let component: TemplateBindingComponent;
  let fixture: ComponentFixture<TemplateBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateBindingComponent]  // Corrigido para declarations
    })
      .compileComponents();

    fixture = TestBed.createComponent(TemplateBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
