import {Directive, ElementRef, HostListener, Renderer, HostBinding, OnInit, Input} from '@angular/core';

@Directive({
    selector: '[appCardHover]'
})
export class CardHoverDirective implements OnInit {

    @HostBinding('class.card-outline-primary') private isHovering: boolean = false;

    @Input('appCardHover') config: Object = {
        querySelector: ''
    };

    constructor(private el: ElementRef,
                private renderer: Renderer) {
        //el.nativeElement.style.backgroundColor = 'ivory';
    }

    mouseHandle(isOver) {
        let punchlineEl = this.el.nativeElement.querySelector(this.config['querySelector']);
        this.renderer.setElementProperty(punchlineEl, 'hidden', !isOver);
    }

    @HostListener('mouseover') onMouseOver() {
        this.mouseHandle(true);
    }

    @HostListener('mouseout') onMouseOut() {
        this.mouseHandle(false);
    }

    ngOnInit() {
        let btn = this.el.nativeElement.querySelector('.btn');
        btn.style.display = 'none';
    }


}
