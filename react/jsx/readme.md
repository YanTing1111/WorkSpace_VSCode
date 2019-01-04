1、JSX 是react模板的语法
    就在Component->render()里面，或函数式组件retrun()里面
    它的template跟vue不一样，在JS里面，故称为JSX，交给babel编译
2、JSX是一切组件的基础，特别是像函数式组件或表现式组件，就是以返回JSX为目标的
3、JSX真的就是JS，可以执行一切的JS
4、react 的JSX是React.createElement()更优雅的表达，可读性更好
5、JSX是用来描述UI信息的，React.createElement()更能表达这点
6、不管是小程序，vue，还是react，这些东西都是一模一样的，都是MVVM
    模板里面要进行数据绑定的用{} 或 {{}}
    JSX不支持wx:for，还好它是纯JS的，可以自己写逻辑，这是JSX的灵活性
7、
<ul>
    {
        users.map(
            (user,index) => <li key={index}>{user.name} - {user.type}</li>
        )
    }
</ul>
8、在jSX里面一定要有一个唯一的外层节点包裹所有子节点，不能直接暴露所有节点
9、在JSX里，所有js都用{}