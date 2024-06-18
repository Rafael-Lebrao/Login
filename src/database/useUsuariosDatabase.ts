import { useSQLiteContext } from "expo-sqlite"

export type UsuariosDatabase = {
    id: number
    name: String
    email: String
    senha: String
}

export function useUsuariosDatabase() {

    const database = useSQLiteContext()

    async function create(data: Omit<UsuariosDatabase, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO usuario (name, email, senha) VALUES ($name, $email, $senha)"
        );
        
        try {
            const result = await statement.executeAsync({
                $name: data.name,
                $email: data.email,
                $senha: data.senha,
            })

            const insertdRowId = result.lastInsertRowId.toLocaleString()
            
        } catch (error) {
            throw error;
        }
    }
    

    return{
        create
    }
}