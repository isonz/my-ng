import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem }      from './ad-item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
                <h3>Advertisements</h3>
                <ng-template ad-host></ng-template>
              </div>
            `
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    // 余数取值，等于每个元素都能排到
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    // 利用组件工厂生产一个组件
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    // 生成一个 ad-host 的视图容器
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();     // 确保每次只有一个广告出现

    // 在 ad-host 容器里加入组件工厂里的那个组件，形成一个新的组件视图。
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;     //在新视图里把数据传递进去
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
