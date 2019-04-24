import React, { Component } from 'react';
import {HeaderWrap,Logo,Nav,NavItem,NavInputWrap,NavInput,Add,Btn,SearchInfo,SearchInfoContent,SearchInfoTitleSwich,SearchInfoTitle,SearchInfoContentItem,SearchInfoContentHeader} from './headerstyle.js';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import * as actionCreater from './store/actionCreater.js'
class Header extends Component {
	constructor(props){
		super(props);
	}
   show=()=>{
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoContentHeader>
            <SearchInfoTitle>热门搜索</SearchInfoTitle>
            <SearchInfoTitleSwich>换一批</SearchInfoTitleSwich>
          </SearchInfoContentHeader>
          <SearchInfoContent>
          {
            this.props.list.map((item)=>{
              return <SearchInfoContentItem key={item}>{item}</SearchInfoContentItem>
            })
          }
                
          </SearchInfoContent>
        </SearchInfo>
      )
    }else{
      return null;
    }
  }
  render() {
    return (
      <HeaderWrap>
       <Logo href='/' />
       <Nav>
       	<NavItem className='left active'>首页</NavItem>
       	<NavItem className='left'>下载APP</NavItem>
       	<NavItem className='right'>登录</NavItem>
       	<NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
       	<NavInputWrap>
       	<CSSTransition
       		timeout={200}
       		in={this.props.focused}
       		classNames='slide'
       	>
       	<NavInput className={this.props.focused? 'focused':''} onFocus={this.props.onfocus} onBlur={this.props.onblur}></NavInput>
       	</CSSTransition>
       	<span className={this.props.focused? 'focused iconfont':'iconfont'}>&#xe60a;</span>
        
       	</NavInputWrap>
        {this.show()}
       </Nav>
       <Add>
       	<Btn className='reg'>注册</Btn>
       	<Btn className='wri'><span className="iconfont">&#xe615;</span> 写文章</Btn>
       </Add>
      </HeaderWrap>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    focused:state.header.focused,
    list:state.header.list
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
            onfocus(){
               dispatch(actionCreater.getListAxios());
              const action=actionCreater.onFocus();
              dispatch(action);
            },
            onblur(){
              const action=actionCreater.onBlur()
              dispatch(action);
            }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);