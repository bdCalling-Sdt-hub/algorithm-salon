import { Alert } from 'antd'
import React from 'react'

export default function ApiErrorAlert({isError,errorMessage}) {
  return (
    <>
    {isError && (
        <Alert
          message="Error"
          description={errorMessage || "Server Side Error"}
          type="error"
          showIcon
        />
      )}
      </>
  )
}
