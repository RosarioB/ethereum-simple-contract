function isStringValid (input: string | null | undefined): boolean {
    if((input !== null && input !== undefined && input.trim().length !== 0)){
        return true;
    }
    return false;
}

export {isStringValid};