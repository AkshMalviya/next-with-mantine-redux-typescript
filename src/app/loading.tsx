import React from "react";
import { Loader } from "@mantine/core";

export default function loading() {
    return (
        <div className="loading">
            <Loader color="blue" />
        </div>
    );
}
