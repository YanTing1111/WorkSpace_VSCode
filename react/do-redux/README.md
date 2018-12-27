- redux考题
- 考点1：redux让所有的状态共享，读可以，但是写的话要遵守规则，这也是redux的基本规则，只有action可以修改state（通过执行相应的reducer），组件只能dispatch一个action
- 考点2: reducer 是闺房的小姐， 是不可以直接调用的，只有通过action才可以调用它。
组件 是公子哥，他和reducer是不可以见面的，只可以派遣媒婆dispatch
要保护好数据，设置了reducer，提供并且精确计算状态的函数，组件只有dispatch和一个action，才能执行reducer
