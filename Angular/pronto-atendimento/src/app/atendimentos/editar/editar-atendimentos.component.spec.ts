import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAtendimentosComponent } from './editar-atendimentos.component';

describe('EditarAtendimentosComponent', () => {
  let component: EditarAtendimentosComponent;
  let fixture: ComponentFixture<EditarAtendimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAtendimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAtendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
