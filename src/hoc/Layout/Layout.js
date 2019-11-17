import React from 'react'
import LeftNav from '../../Components/Navigation/LeftNav/LeftNav'
import MenuToggle from '../../Components/Navigation/MenuToggle/MenuToggle'
import ErrorPage from '../../Containers/ErrorPage/ErrorPage'
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

                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout