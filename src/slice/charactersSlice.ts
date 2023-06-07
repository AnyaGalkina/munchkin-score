import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type CharacterType = {
    id: number;
    characterName: string;
    score: number;
    avatar: string;
}

type CharactersStateType = {
    characters: Array<CharacterType>;
    additionalContent: AdditionalContentType;
}

export type AdditionalContentType = 'addNewCharacter' | 'chooseFirstPlayer' | ''


export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: [],
        additionalContent: 'addNewCharacter'
    } as CharactersStateType,
    reducers: {
        setCharacter(state: CharactersStateType, action: PayloadAction<CharacterType>) {
            state.characters.unshift(action.payload);
            console.log(state.characters)
        },
        addScore(state, action: PayloadAction<{ id: number }>) {
            const index = state.characters.findIndex(
                (character: CharacterType) => character.id === action.payload.id,
            );

            if (index > -1 && state.characters[index].score < 99) {
                state.characters[index].score += 1;
            }
        },
        subtractScore(state, action: PayloadAction<{ id: number }>) {
            const index = state.characters.findIndex(
                (character: CharacterType) => character.id === action.payload.id,
            );

            if (index > -1 && state.characters[index].score > 1 ) {
                state.characters[index].score -= 1;
            }
        },
        deleteCharacter(state, action: PayloadAction<{ id: number }>) {
            const index = state.characters.findIndex(
                (character: CharacterType) => character.id === action.payload.id,
            );

            if (index > -1) {
                state.characters.splice(index, 1);
            }
        },
        clearScore(state, action) {
            state.characters.forEach((character: CharacterType) => {
                character.score = 1;
            })
        },
        setAdditionalContent(state, action: PayloadAction<AdditionalContentType>) {
            state.additionalContent = action.payload;
        },
        editCharacterName(state, action: PayloadAction<{ characterName: string, newCharacterName: string }>) {
            const index = state.characters.findIndex(
                (character: CharacterType) => character.characterName === action.payload.characterName,
            );

            if (index > -1) {
                state.characters[index].characterName = action.payload.newCharacterName;
            }
        }
    }
});

export const {
    setCharacter,
    addScore,
    clearScore,
    subtractScore,
    deleteCharacter,
    setAdditionalContent,
    editCharacterName
} = charactersSlice.actions;

export const charactersReducer = charactersSlice.reducer;
