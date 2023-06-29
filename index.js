const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("App is running...");
});

// Endpoint to retrieve the data
app.get("/cost/data", (req, res) => {
  const data = {
    India: {
      Private: {
        Karnataka: {
          Fees: 1000000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Maharashtra: {
          Fees: 1200000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 70000,
            Off: 100000,
          },
          Food: {
            Meal: 50000,
            Outside: 70000,
            Own: 35000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Uttar_Pradesh: {
          Fees: 1200000,
          Living: {
            On: 50000,
            Off: 70000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Tamil_Nadu: {
          Fees: 1000000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
      },
      Government: {
        Karnataka: {
          Fees: 100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Maharashtra: {
          Fees: 120000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 70000,
            Off: 100000,
          },
          Food: {
            Meal: 50000,
            Outside: 70000,
            Own: 35000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Uttar_Pradesh: {
          Fees: 120000,
          Living: {
            On: 50000,
            Off: 70000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Tamil_Nadu: {
          Fees: 100000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
      },
    },

    Abroad: {
      Private: {
        Kyrgyzstan: {
          Fees: 450000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 36000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 40000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Nepal: {
          Fees: 500000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Philippines: {
          Fees: 700000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 70000,
            Off: 90000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Georgia: {
          Fees: 480000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 150000,
            Off: 200000,
          },
          Food: {
            Meal: 120000,
            Outside: 170000,
            Own: 80000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Kazakhstan: {
          Fees: 440000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 90000,
            Off: 120000,
          },
          Food: {
            Meal: 80000,
            Outside: 120000,
            Own: 50000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Russia: {
          Fees: 330000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 60000,
            Off: 80000,
          },
          Food: {
            Meal: 50000,
            Outside: 70000,
            Own: 40000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
      },
      Government: {
        Kyrgyzstan: {
          Fees: 450000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 36000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 40000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Nepal: {
          Fees: 500000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 40000,
            Off: 50000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Philippines: {
          Fees: 700000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 70000,
            Off: 90000,
          },
          Food: {
            Meal: 30000,
            Outside: 50000,
            Own: 25000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Georgia: {
          Fees: 480000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 150000,
            Off: 200000,
          },
          Food: {
            Meal: 120000,
            Outside: 170000,
            Own: 80000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Kazakhstan: {
          Fees: 440000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 90000,
            Off: 120000,
          },
          Food: {
            Meal: 80000,
            Outside: 120000,
            Own: 50000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
        Russia: {
          Fees: 330000,
          Colleges: {
            ABC: 40000,
            XYZ: 50000,
            PQR: 80000,
          },
          Living: {
            On: 60000,
            Off: 80000,
          },
          Food: {
            Meal: 50000,
            Outside: 70000,
            Own: 40000,
          },
          Transportation: {
            Walk: 0,
            Local: 10000,
            Rent: 15000,
            Taxi: 20000,
          },
          Activities: {
            Gym: 5000,
            Sports: 5000,
            Movies: 5000,
          },
          Air_Ticket: 50000,
          Consultation_Fees: 10000,
        },
      },
    },
  };

  res.json(data);
});

const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});
