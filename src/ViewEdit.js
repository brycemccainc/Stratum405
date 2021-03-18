//import React, { Component } from 'react';
import { Tree } from 'antd';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
//import ReactDOM from 'react-dom';
//import mountNode from "mount-js";
//import App from './App';
//const {  Tree  } = antd;



const initTreeDate = [
  {
    title: 'Region',
    key: '0',
  },
  {
    title: 'Market',
    key: '1',
  },
  {
    title: 'DOS',
    key: '2',
  },
  {
    title: 'ARSMS',
    key: '3',
  },
  {
    title: 'Stores',
    key: '4',
    //isLeaf: true,
  },
]; // It's just a simple demo. You can use tree map to optimize update perf.

function ViewEdit(list, key, children) {

  return list.map((node) => {
    if (node.key === key) {
      return { ...node, children };
    }

    if (node.children) {
      return { ...node, children: ViewEdit(node.children, key, children) };
    }

    return node;
  });
}

const Demo = () => {
  const [treeData, setTreeData] = useState(initTreeDate);
  return (
    <div>
        <h1> View/Edit Hierarchies</h1>
        < Tree loadData={onLoadData} treeData={treeData} />
        <Button href="#">Import</Button> {' '}
    </div>
  )

  function onLoadData({ key, children }) {
    return new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }

      setTimeout(() => {
        setTreeData((origin) =>
          ViewEdit(origin, key, [
            {
              title: 'Example Child',
              key: `${key}-0`,
            },
            /*{
              title: 'Child 2',
              key: `${key}-1`,
            }, */
          ]),
        );
        resolve();
      }, 1000);
    });
  }

  
  //return <Tree loadData={onLoadData} treeData={treeData} />;

};

export default Demo;

//ReactDOM.render(<Demo />, mountNode);

/*
const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

class ViewEdit extends React.Component {
  state = {
    gData,
    expandedKeys: ['dog', 'cat', 'fish'],
  };

  onDragEnter = info => {
    console.log(info);
    // expandedKeys 需要受控时设置
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  };

  onDrop = info => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    const data = [...this.state.gData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, item => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
        // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      });
    } else {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }

    this.setState({
      gData: data,
    });
  };

  render() {
    return (
      <Tree
        className="draggable-tree"
        defaultExpandedKeys={this.state.expandedKeys}
        draggable
        blockNode
        onDragEnter={this.onDragEnter}
        onDrop={this.onDrop}
        treeData={this.state.gData}
      />
    );
  }
} */

//ReactDOM.render(<App />, document.getElementById('/viewedit'));
