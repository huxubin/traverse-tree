<template>
  <div style="text-align:left">
    <p>
      1、根据某一唯一属性值获取其名称：<br/>
      {{nodeId}}：{{nodeName}}
    </p>
    <p>
      2、包含某节点值的所有节点值：<br/>
      {{nodeId}}：{{nodeNameJoin}}
    </p>
  </div>
</template>

<script>
import Axios from 'axios'
import MockData from '../utils/mock-data'
export default {
  name: 'TraverseTree',
  props: {
    nodeId: Number
  },
  data () {
    return {
      nodeName: '',
      nodeNameJoin: ''
    }
  },
  created () {
    this.initData().then((data) => {
      let id = this.nodeId
      if (id) {
        this.nodeName = this.queryUniqueByAttr(data, 'id', id)
        let init = []
        let _recursion = this.queryRecursion(data, 'id', id, init)
        this.nodeNameJoin = _recursion.join()
      }
    })
  },
  methods: {
    initData () {
      return new Promise((resolve, reject) => {
        Axios.get('mock/treeData').then((data) => {
          resolve(data.data)
        }).catch(() => {
          reject()
        })
      })
    },
    queryUniqueByAttr (data, attr, value) {
      if (!data || !data.length) return
      let stack = []
      let item = null
      let result = ''
      for (let i = 0; i < data.length; i++) {
        stack.push(data[i])
      }
      while (stack.length) {
        item = stack.shift()
        if (item[attr] === value) {
          result = item.name
          return result
        } else {
          let _child = item.children
          if (_child && _child.length) {
            stack = _child.concat(stack)
          }
        }
      }
      return result
    },
    queryRecursion (data, attr, value, result) {
      if (!data || !data.length) return
      for (let i = 0; i < data.length; i++) {
        let item = data[i]
        let attrStr = String(item[attr])
        let valStr = String(value)
        if (attrStr.includes(valStr)) {
          result.push(item.name)
        }
        let _child = item.children
        if (_child && _child.length) {
          this.queryRecursion(_child, attr, value, result)
        }
      }
      return result
    }
  }
}
</script>

<style scoped>
</style>
