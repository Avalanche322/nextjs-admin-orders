const formatDate = (date: string) => {
    const data = new Date(date);
    return data.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
}

export default formatDate;