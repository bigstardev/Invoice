import './editableInput.css'

export default function EditableInput({ className, placeholder, value, onChange, type }) {
    return (
        <input type={type || ''}
            className={'input ' + (className ? className : '')}
            placeholder={placeholder || ' '}
            value={value || ''}
            onChange={onChange ? (e) => onChange(e.target.value) : undefined}

        />
    )
}

