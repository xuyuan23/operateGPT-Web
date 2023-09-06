import React, { Component } from 'react'

class SubElement extends Component {
    render () {
        const { element } = this.props
        return (
            <div>
                {Object.entries(element).map(([k, v]) => (
                    <div key={k}>
                        {k}：{v}
                    </div>
                ))}
                <hr />
            </div>
        )
    }
}

class CommElement extends Component {
    render () {
        const { elements } = this.props
        return (
            <div>
                {elements.map((element, i) => (<SubElement key={i} element={element} />))}
            </div>
        )
    }
}

export default CommElement;