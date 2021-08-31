import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onToggleForm, showAddForm }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAddForm ? 'red' : 'green'} text={showAddForm ? 'Close' : 'Add'} onClick={onToggleForm} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = { 
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red'
}

export default Header
