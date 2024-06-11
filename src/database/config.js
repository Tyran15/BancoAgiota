import React, { useEffect } from 'react';
import { openDatabase } from "expo-sqlite";

const db = openDatabase('db.db');

export default function Database() {
    const initializeDatabase = () => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nome TEXT, cpf TEXT, tel TEXT, data_nascimento TEXT, senha TEXT);'
            );
        });
    };

    useEffect(() => {
        initializeDatabase();
    }, []);

    return null;
}
