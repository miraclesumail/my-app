import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test.component';
import { TestChildOneComponent } from './test-one/test1.component';
import { TestChildTwoComponent } from './test-two/test2.component';

const routes: Routes = [
    {
        path: '',
        component: TestComponent,
        data: {
            title: '测试模块'   //这个data数据可以通过路由参数对象获取到,有面包屑导航需求场景时有用
        },
        //如果需要路由到子模块，则添加children属性
        children: [
            {
                path: 'test1',
                component: TestChildOneComponent 
            },
            {
                path: 'test2',
                component: TestChildTwoComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TestRouting { }
