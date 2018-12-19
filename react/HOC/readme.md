Student 原始组件 独立
高阶组件，基于原始组件封装一下，立马改头换面，可以比原来的普通组件多些功能
新建一个组件？ 那我会有很多垃圾组件
命名函数 EnhanceWrapper(原始组件)
 #公式 const EnhancedComponent = higherOrderComponent(WrappedComponent)