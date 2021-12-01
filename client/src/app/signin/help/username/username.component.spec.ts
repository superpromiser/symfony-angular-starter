import {APP_BASE_HREF} from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppModule} from '../../../app.module';
import {SigninModule} from '../../signin.module';
import {UsernameComponent} from './username.component';

describe('UsernameComponent', () => {
    let component: UsernameComponent;
    let fixture: ComponentFixture<UsernameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                   imports: [
                       AppModule,
                       SigninModule,
                   ],
                   providers: [
                       {provide: APP_BASE_HREF, useValue: '/'},
                   ],
               })
               .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsernameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
