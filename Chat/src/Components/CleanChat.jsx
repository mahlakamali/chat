import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default class CleanChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Metitle: "Me", 
      MeMassageList: [
          {
          type:'sent',
         massage:"hello wellcome",
         time:""
  
        },
      ],
    
    ChatAvatar: {
        You: "https://bootdey.com/img/Content/avatar/avatar1.png",
        Me: "https://bootdey.com/img/Content/avatar/avatar2.png",
      },
   
      YouTitle: "You", 
     YouMassageList: [
        {
          type:'receive',
          massage:"Hi, Thank you my Dear",
          time:""
        },
      ],
    
      ChatAvatar: {
        You: "https://bootdey.com/img/Content/avatar/avatar2.png",
        Me: "https://bootdey.com/img/Content/avatar/avatar1.png",
      },
    };
  }
  handelMeMassage(massage){
    this.setState({
      MeMassageList:[
            ...this.state.MeMassageList,
            {
                type:'sent',
                massage,
                time:new Date().toLocaleTimeString()
            }
        ],
        YouMassageList:[
            ...this.state.YouMassageList,
            {
                type:'receive',
                massage,
                time:new Date().toLocaleTimeString()
            }
        ]
    })
  }
  handelSalehMassage(massage){
    this.setState({
      MeMassageList:[
            ...this.state.MeMassageList,
            {
                type:'receive',
                massage,
                time:new Date().toLocaleTimeString()
            }
        ],
        YouMassageList:[
            ...this.state.YouMassageList,
            {
                type:'sent',
                massage,
                time:new Date().toLocaleTimeString()
            }
        ]
    })
  }
  render() {
    return (
          <div>
          <div className="panel" id="chat">
            <Header title={this.state.Metitle} />
            <Main massageList={this.state.MeMassageList} avatar={this.state.ChatAvatar} />
            <Footer handleMassage={this.handelMeMassage.bind(this)}  />
            <Header title={this.state.YouTitle} />
            <Main massageList={this.state.YouMassageList} avatar={this.state.ChatAvatar} />
            <Footer handleMassage={this.handelSalehMassage.bind(this)}  />
          </div>
        </div>
        );
  }
}
