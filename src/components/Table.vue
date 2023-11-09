<!-- <template>
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      size="middle"
      :scroll="{ x: 'calc(700px + 50%)', y: 400 }"
      row-key="key"
    />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      fixed: 'left',
      scopedSlots: { customRender: 'name' },
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'John',
          value: 'John',
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 100,
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Street',
      dataIndex: 'street',
      key: 'street',
      width: 150,
    },
    {
      title: 'Building',
      dataIndex: 'building',
      key: 'building',
      width: 100,
    },
    {
      title: 'Door No.',
      dataIndex: 'number',
      key: 'number',
      width: 100,
    },
    {
      title: 'Company Address',
      dataIndex: 'companyAddress',
      key: 'companyAddress',
      width: 200,
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      width: 80,
      fixed: 'right',
    },
  ];
  
  const data = ref([...Array(100)].map((_, i) => ({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  })));
  </script>
  

<style scoped>
/* Customize table header */
.ant-table-thead {
  background-color: #1890ff;
  color: #fff;
}

/* Style table cells */
.ant-table-cell {
  padding: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Style the header cells */
.ant-table-cell-ellipsis {
  font-weight: bold;
}

/* Style the fixed columns */
.ant-table-fixed-left {
  background-color: #f5f5f5;
}

/* Style the 'Name' column */
.name-column {
  font-weight: bold;
}

/* Style filter dropdown */
.ant-table-filter-dropdown {
  width: 200px;
  padding: 8px;
}

/* Style filter items */
.ant-table-filter-dropdown-list {
  max-height: 200px;
  overflow-y: auto;
}

/* Style filter item label */
.ant-table-filter-dropdown-link {
  white-space: nowrap;
}

/* Style the action column */
.action-column {
  text-align: center;
}

/* Highlight hovered rows */
.ant-table-tbody tr:hover {
  background-color: #f0f0f0;
}

/* Style pagination */
.ant-pagination {
  margin: 20px 0;
  text-align: center;
}
</style>


   -->



   <template>
    <DataTable :rows="data"></DataTable>
</template>
<script setup lang="ts">
    import { DataTable } from "@jobinsjp/vue3-datatable"
    import "@jobinsjp/vue3-datatable/dist/style.css"

    const data = [
    {
        "id": 1,
        "first_name": "Misti",
        "last_name": "Strase",
        "email": "mstrase0@instagram.com",
        "gender": "Non-binary",
        "ip_address": "151.38.32.165",
    },
    {
        "id": 2,
        "first_name": "Valentina",
        "last_name": "Bonas",
        "email": "vbonas1@is.gd",
        "gender": "Agender",
        "ip_address": "103.10.225.246",
    },
    {
        "id": 3,
        "first_name": "John",
        "last_name": "Doe",
        "email": "johndoe@example.com",
        "gender": "Male",
        "ip_address": "192.168.1.1",
    },
    {
        "id": 4,
        "first_name": "Jane",
        "last_name": "Smith",
        "email": "janesmith@gmail.com",
        "gender": "Female",
        "ip_address": "10.0.0.1",
    },
    {
        "id": 5,
        "first_name": "Samuel",
        "last_name": "Johnson",
        "email": "samuel.j@example.org",
        "gender": "Male",
        "ip_address": "172.16.0.1",
    },
    {
        "id": 6,
        "first_name": "Ella",
        "last_name": "Wilson",
        "email": "ellawilson@yahoo.com",
        "gender": "Female",
        "ip_address": "192.168.2.1",
    },
    {
        "id": 7,
        "first_name": "Alex",
        "last_name": "Martin",
        "email": "alex.martin@mail.com",
        "gender": "Non-binary",
        "ip_address": "203.0.113.1",
    },
    {
        "id": 8,
        "first_name": "Samantha",
        "last_name": "Davis",
        "email": "samantha.d@example.net",
        "gender": "Female",
        "ip_address": "172.16.0.2",
    },
    {
        "id": 9,
        "first_name": "William",
        "last_name": "Johnson",
        "email": "william.j@example.com",
        "gender": "Male",
        "ip_address": "192.168.3.1",
    },
    {
        "id": 10,
        "first_name": "Olivia",
        "last_name": "Smith",
        "email": "oliviasmith@mail.net",
        "gender": "Female",
        "ip_address": "10.0.0.2",
    },
    {
        "id": 11,
        "first_name": "Liam",
        "last_name": "Wilson",
        "email": "liam.w@example.org",
        "gender": "Male",
        "ip_address": "192.168.4.1",
    },
    {
        "id": 12,
        "first_name": "Sophia",
        "last_name": "Brown",
        "email": "sophia.brown@example.com",
        "gender": "Female",
        "ip_address": "203.0.113.2",
    },
    {
        "id": 13,
        "first_name": "Noah",
        "last_name": "Miller",
        "email": "noah.m@example.net",
        "gender": "Male",
        "ip_address": "172.16.0.3",
    },
    {
        "id": 14,
        "first_name": "Ava",
        "last_name": "Wilson",
        "email": "ava.w@mail.com",
        "gender": "Female",
        "ip_address": "192.168.5.1",
    },
    {
        "id": 15,
        "first_name": "Jackson",
        "last_name": "Davis",
        "email": "jackson.d@example.org",
        "gender": "Male",
        "ip_address": "192.168.6.1",
    },
    {
        "id": 16,
        "first_name": "Emma",
        "last_name": "Johnson",
        "email": "emma.j@example.com",
        "gender": "Female",
        "ip_address": "203.0.113.3",
    },
    {
        "id": 17,
        "first_name": "Liam",
        "last_name": "Taylor",
        "email": "liam.t@example.net",
        "gender": "Male",
        "ip_address": "172.16.0.4",
    },
    {
        "id": 18,
        "first_name": "Isabella",
        "last_name": "Brown",
        "email": "isabella.b@mail.com",
        "gender": "Female",
        "ip_address": "192.168.7.1",
    },
    {
        "id": 19,
        "first_name": "Mason",
        "last_name": "Wilson",
        "email": "mason.w@example.org",
        "gender": "Male",
        "ip_address": "192.168.8.1",
    },
    {
        "id": 20,
        "first_name": "Olivia",
        "last_name": "Johnson",
        "email": "olivia.j@example.com",
        "gender": "Female",
        "ip_address": "203.0.113.4",
    },
];

</script>