import React from 'react'
import LeftNav from '../../Components/Navigation/LeftNav/LeftNav'
import MenuToggle from '../../Components/Navigation/MenuToggle/MenuToggle'
import styles from './Layout.css'


class Layout extends React.Component {

    state = {
        menu: false,
    }
    

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    closeMenu = () => {
        this.setState({
            menu: false
        })
    }
    render() {
        const mainCls = [
            'vh-100',
            'bg-info'
          ]

        return (
            <React.Fragment>

                <LeftNav 
                    isOpen={this.state.menu}
                    onClose={this.closeMenu}
                />

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main className = {mainCls.join(' ')}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout