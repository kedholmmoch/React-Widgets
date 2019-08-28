import React from 'react';
import TabItem from "./tab_item";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
    this.content = props.content;
    this.setSelected = this.setSelected.bind(this);
  }

  setSelected(e) {
    let thing = document.getElementById(this.state.selected);
    thing.classList.toggle("selected");
    const tab = e.target.getAttribute("data-idx");
    this.setState({selected: tab});
    let thing2 = document.getElementById(tab);
    thing2.classList.toggle("selected");
  }

  render() {

    return (
      <div>
        <h1>Tabs</h1>
        <div className="tabs">
          <ul className="tab-heads">
            {
              this.content.map( (tab, idx) => {
                return <TabItem idx={idx} title={tab.title} setSelected={this.setSelected} key={idx} />
              })
            }
          </ul>
          <article className="open-tab">
            {
              this.content[this.state.selected].content
            }
          </article>
        </div>
      </div>
    )
  }
}