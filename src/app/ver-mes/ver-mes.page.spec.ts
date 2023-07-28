import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerMesPage } from './ver-mes.page';

describe('VerMesPage', () => {
  let component: VerMesPage;
  let fixture: ComponentFixture<VerMesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerMesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
