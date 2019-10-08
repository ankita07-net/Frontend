import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorytoProductComponent } from './categoryto-product.component';

describe('CategorytoProductComponent', () => {
  let component: CategorytoProductComponent;
  let fixture: ComponentFixture<CategorytoProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorytoProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorytoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
