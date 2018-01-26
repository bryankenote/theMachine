<template>
  <table>
    <thead>
      <slot name="thead"></slot>
    </thead>
    <tbody>
      <slot name="tbody"></slot>
    </tbody>
  </table>
</template>

<script>
export default {
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
}

th, td {
  text-align: left;
  padding: 5px;
}

.data:hover {
  /*border-bottom: 1px solid #5BC0DE;*/
  background-color: #EFFFFF;
}

tr {
  border-top: 1px solid #DDD;
}

textarea {
  max-width: 100%;
}

@media
only screen and (max-width: 768px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table, thead, tbody, th, td, tr {
		display: block;
  }

  table {
    margin-top: 20px;
  }

	thead tr {
		position: absolute;
		top: -9999px;
		left: -9999px;
	}

	tr {
    border: 1px solid #ccc;
  }

	td {
    border: none;
		border-bottom: 1px solid #eee;
		position: relative;
		padding-left: 50%;
	}

	td:hover {
      background-color: transparent;
  }
	td:before {
		position: absolute;
		top: 6px;
		left: 6px;
		width: 45%;
		padding-right: 10px;
    white-space: nowrap;
	}
}
</style>
