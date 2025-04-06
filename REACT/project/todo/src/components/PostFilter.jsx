import React from "react";
import { useMemo, useState } from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<MyInput
				placeholder="Поиск..."
				//Привязывает значение input к состоянию searchQuery
				value={filter.query}
				// onChange срабатывает при вводе текста.
				// e.target.value — содержит новый текст, который ввёл пользователь.
				// setSearchQuery(e.target.value) обновляет состояние searchQuery.
				onChange={(e) =>
					setFilter({ ...filter, query: e.target.value })
				}
			/>
			<MySelect
				//value- управляет какая опция будет выбрана
				value={filter.query}
				//а onChange - обновляет переданное значение опции
				onChange={(selectedSort) =>
					setFilter({ ...filter, sort: selectedSort })
				}
				defaultValue="Сортировка"
				options={[
					{ value: "title", name: "По названию" },
					{ value: "body", name: "По описанию" },
				]}
			/>
		</div>
	);
};

export default PostFilter;
