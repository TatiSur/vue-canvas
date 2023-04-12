export const circularIndex = (arr = []) => {
    let position = 0
    let isNext = true

    return () => {
        if (!arr.length) return 0

        position = isNext ? ++position : --position
        isNext = position === arr.length || position === 0 ? !isNext : isNext

        return position
    }
}
