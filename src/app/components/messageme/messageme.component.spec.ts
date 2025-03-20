import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagemeComponent } from './messageme.component';

describe('MessagemeComponent', () => {
  let component: MessagemeComponent;
  let fixture: ComponentFixture<MessagemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
