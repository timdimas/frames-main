import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import PropTypes from "prop-types";

const STORAGE_KEY = "app.settings";

type Settings = {
    language: string;
};

const restoreSettings = () => {
    let value = null;

    try {
        const restored = window.localStorage.getItem(STORAGE_KEY);

        if (restored) {
            value = JSON.parse(restored);
        }
    } catch (err) {
        console.error(err);
        // If stored data is not a strigified JSON this will fail,
        // that's why we catch the error
    }

    return value;
};

const deleteSettings = () => {
    try {
        window.localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
        console.error(err);
    }
};

const storeSettings = (value: Settings) => {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch (err) {
        console.error(err);
    }
};

const initialSettings = {
    language: "en",
};

const initialState = {
    ...initialSettings,
    isInitialized: false,
    openDrawer: false,
};

export const SettingsContext = createContext({
    ...initialState,
    handleReset: () => {},
    handleUpdate: (settings: Settings) => {},
});

export const SettingsProvider = (props: { children: any }) => {
    const { children } = props;
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const restored = restoreSettings();

        if (restored) {
            setState((prevState) => ({
                ...prevState,
                ...restored,
                isInitialized: true,
            }));
        }
    }, []);

    const handleReset = useCallback(() => {
        deleteSettings();
        setState((prevState) => ({
            ...prevState,
            ...initialSettings,
        }));
    }, []);

    const handleUpdate = useCallback((settings: Settings) => {
        setState((prevState) => {
            storeSettings({
                language: prevState.language,
            });

            return {
                ...prevState,
                ...settings,
            };
        });
    }, []);

    return (
        <SettingsContext.Provider
            value={{
                ...state,
                handleReset,
                handleUpdate,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

SettingsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const SettingsConsumer = SettingsContext.Consumer;
