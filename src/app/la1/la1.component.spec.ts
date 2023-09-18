import { ComponentFixture, TestBed } from '@angular/core/testing';

import { La1Component } from './la1.component';

describe('La1Component', () => {
  let component: La1Component;
  let fixture: ComponentFixture<La1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [La1Component]
    });
    fixture = TestBed.createComponent(La1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should add 2 to 5 ', () => {
     const inp1 = "2";
     const inp2 = "5";
     component.add(inp1,inp2);
     expect(component.resultValue).toBe(7);
     });
    
     it('should subtract 2 from 5 ', () => {
      const inp1 = "2";
      const inp2 = "5";
      component.sub(inp2,inp1);
      expect(component.resultValue).toBe(3);
      });    

      it('should multiply 2 and 5 ', () => {
        const inp1 = "2";
        const inp2 = "5";
        component.mul(inp1,inp2);
        expect(component.resultValue).toBe(10);
        });

        it('should divide 10 by 5 ', () => {
          const inp1 = "10";
          const inp2 = "5";
          component.divi(inp1,inp2);
          expect(component.resultValue).toBe(2);
          });
});


