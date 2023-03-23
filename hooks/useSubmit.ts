const useSubmit = () => {
  return (data: { [key: string]: string }) => {
    return fetch('/api/send-mail', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      });
  };
};
export default useSubmit;
