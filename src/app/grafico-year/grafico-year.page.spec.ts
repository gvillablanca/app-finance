import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraficoYearPage } from './grafico-year.page';

describe('GraficoYearPage', () => {
  let component: GraficoYearPage;
  let fixture: ComponentFixture<GraficoYearPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GraficoYearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
