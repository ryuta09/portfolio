import React from 'react'
interface EmailTemplateProps {
  username: string;
  email: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ username, email, content }) => {
  return(
    <div>
      <h1>こんにちは、{username}です</h1>
      <p>{email}から届きました。</p>
      <p>本文 : {content}</p>
    </div>
  )
}