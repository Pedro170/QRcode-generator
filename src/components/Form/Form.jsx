/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import Input from './Input/Input'
import Button from './Button/Button'
import QRCode from 'react-qr-code'
import QRcodeLink from 'qrcode'

const Form = () => {
  const [ value, setValue ] = React.useState('');
  const [qrcode, setQrcode] = React.useState('');

  const form = {
    maxWidth: '300px'
  }

  const handleGenerate = ( link_url ) => {
    QRcodeLink.toDataURL( link_url, {
      width: 600,
      margin: 3,
    }, (error, url) => {
      if( error ) {
        alert('Aconteceu algum erro! Tente mais targe')
      }
      setQrcode( url )
    });
  }

  const handleQrcode = ({ target }) => {
    setValue( target.value )
    handleGenerate( target.value )
    console.log(value);
  }

  return (
    <form style={ form }>
      <QRCode value={ value } />

      <Input
        id="password"
        type="password"
        value={ value }
        onChange={ handleQrcode }
        placeholder="Digite sua senha"
       />

      <Button>
        <a href={ qrcode } download={`qrcode.png`} >Baixar QRCode</a>
      </Button>
    </form>
  )
}

export default Form
