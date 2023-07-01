function CurrentMessage(props) {
        if (props.day >= 1 && props.day <= 5) {
            return <Workdays />
        }
        return <Weekends />
    }

// function CurrentMessage() {
//         const day = new Date().getDay();
//         if (day >= 1 && day <= 5) {
//             return <Workdays />
//         }
//         return <Weekends />
//     }

export default CurrentMessage